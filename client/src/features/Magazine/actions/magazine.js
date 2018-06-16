import actionTypes from '../../../actions/actionTypes';
import MagazineService from '../../../services/magazineService';
import AllMagazinesModel from '../../../utils/Models/Magazine/AllMagazinesModel';
import MagazineByCategoryModel from '../../../utils/Models/Magazine/MagazineByCategoryModel';
import MagazineDetailsModel from '../../../utils/Models/Magazine/MagazineDetailsModel';
import MagazineModelsParser from '../../../utils/magazineModelsParser'
import constants from '../../../utils/constants';

const defaultCoverUrl = constants.defaultMagazineCover;

export const loadAllMagazines = allMagazines => ({
    type: actionTypes.LOAD_ALL_MAGAZINES,
    allMagazines
});

export const loadMagazinesByCategory = magazinesByCategory => ({
    type: actionTypes.LOAD_MAGAZINES_BY_CATEGORY,
    magazinesByCategory
});

export const loadMagazineDetails = magazineDetails => ({
    type: actionTypes.LOAD_MAGAZINE_DETAILS,
    magazineDetails
});


export function getAllMagazines() {
    return dispatch => {
        MagazineService.getAllMagazines()
            .then(res => {
                const allMagazines = MagazineModelsParser.parseAllMagazines();
                dispatch(loadAllMagazines(allMagazines));
            })
            .catch(err => console.log(err));
    };
}

export function getMagazinesByCategory(categoryId) {
    return dispatch => {
        MagazineService.getMagazinesByCategory(categoryId)
            .then(res => {
                const magazinesByCategory = MagazineModelsParser.parseMagazineByCategory(res);
                dispatch(loadMagazinesByCategory(magazinesByCategory));
            })
            .catch(err => console.log(err));
    };
}

export function getMagazineDetails(magazineId) {
    return dispatch => {
        MagazineService.getMagazineDetails(magazineId)
            .then(res => {
                const magazineDetails = MagazineModelsParser.parseMagazineDetails(res);
                dispatch(loadMagazineDetails(magazineDetails));
            })
            .catch(err => console.log(err));
    };
}
