from flask import Flask, jsonify, request,render_template,redirect,session
from menu_item import MenuItem
from menu_manager import MenuManager
import connexion

app = Flask(__name__)
app = connexion.App(__name__, specification_dir="./")
app.add_api("swagger.yml")
application = app.app  

@app.route('/login', methods=['GET', 'POST'])
def login():
    print(f"Method: {request.method}")
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        print(f"Email: {email}, Password: {password}")
        user = MenuManager.check_user_credentials(email, password)
        if user:
            session['user'] = user
            return redirect('/login')
        else:
            return render_template('login.html', error='Invalid credentials')

@app.route('/items', methods=['GET'])
def get_all_items():
    items = MenuManager.all_items()
    return jsonify([{'name': item.name, 'price': item.price} for item in items]), 200

@app.route('/items/<string:name>', methods=['GET'])
def get_item(name):
    item = MenuManager.get_by_name(name)
    if item:
        return jsonify({'name': item.name, 'price': item.price}), 200
    return jsonify({"error": "Item not found"}), 404

@app.route('/items', methods=['POST'])
def create_item():
    data = request.get_json()
    name = data.get("name")
    price = data.get("price")
    if not name or not isinstance(price, int):
        return jsonify({"error": "Invalid input"}), 400
    item = MenuItem(name, price)
    item.save()
    return jsonify({"message": "Item added successfully"}), 201

@app.route('/items/<string:name>', methods=['PUT'])
def update_item(name):
    data = request.get_json()
    new_name = data.get("name")
    new_price = data.get("price")
    item = MenuManager.get_by_name(name)
    if item:
        item.update(new_name, new_price)
        return jsonify({"message": "Item updated successfully"}), 200
    return jsonify({"error": "Item not found"}), 404

@app.route('/items/<string:name>', methods=['DELETE'])
def delete_item(name):
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        return jsonify({"message": "Item deleted successfully"}), 200
    return jsonify({"error": "Item not found"}), 404

if __name__ == '__main__':
    app.run(port=8000)

    
