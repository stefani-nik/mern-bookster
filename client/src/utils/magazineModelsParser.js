import AllMagazinesModel from './Models/Magazine/AllMagazinesModel';
import MagazineByCategoryModel from './Models/Magazine/MagazineByCategoryModel';
import MagazineDetailsModel from './Models/Magazine/MagazineDetailsModel';
import constants from './constants';

const defaultCoverUrl = constants.defaultMagazineCover;

class MagazineModelsParser{


    static parseAllMagazines(res) {
        return res.map(a => {
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let detailsNavigation = `magazines/${a._id}`;
            return new AllMagazinesModel(a.title, imageUrl, a._id, detailsNavigation);
        });
    }

    static parseMagazineByCategory(res) {
        return res.map(a => {
            let imageUrl = a.imageUrl == null ? defaultCoverUrl : a.imageUrl;
            let detailsNavigation = `magazines/${a._id}`;
            return new MagazineByCategoryModel(a.title, a.author, imageUrl, a._id, a.rating, detailsNavigation);
        });
    }

    static parseMagazineDetails(res){
        let imageUrl = res.imageUrl == null ? defaultCoverUrl : res.imageUrl;
        let detailsNavigation = `magazines/${res._id}`;
            return new MagazineDetailsModel(res.title, res.author, res.content, res.date,  imageUrl, res.rating, res.ratesCount, res.category, res.comments, res._id, detailsNavigation );
    }
}

export default MagazineModelsParser;