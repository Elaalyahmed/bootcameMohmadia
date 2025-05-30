class video {
    constructor(title, uploader , time ) {
        this.title = title
        this.uploader = uploader
        this.time = time 
        
    }
    watch(){
        return`“${this.uploader} watched all ${this.time} of ${this.title}!”`

    }
}

const video1 = new video("Learn JavaScript", "Alice", 300);
console.log(video1.watch());

const video2 = new video("React Tutorial", "Bob", 450);
console.log(video2.watch());