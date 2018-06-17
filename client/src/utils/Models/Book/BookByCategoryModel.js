class BookByCategoryModel {
    constructor(title, author, content, imageUrl, id, rating, detailsNavigation) {
        this.title = title;
        this.author = author;
        this.content= content;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.id = id;
        this.detailsNavigation = detailsNavigation;
    }
}

export default BookByCategoryModel;