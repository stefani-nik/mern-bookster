class MagazineDetailsModel {
    constructor(title, content, author, date, imageUrl, rating, ratesCount, category, comments, id, detailsNavigation) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.ratesCount = ratesCount;
        this.category = category;
        this.comments = comments;
        this.id = id;
        this.detailsNavigation = detailsNavigation;
    }
}

export default MagazineDetailsModel;