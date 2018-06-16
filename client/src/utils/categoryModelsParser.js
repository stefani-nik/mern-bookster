import CategoryDropdownModel from './Models/Category/CategoryDropdownModel';

class CategoryModelsParser {


    static parseCategoryDropdown(res) {
        return res.map(c => {
            let detailsNavigation = `/category/${c.categoryType}/${c._id}`;
            return new CategoryDropdownModel(c.name, c._id, detailsNavigation);
        });
    }
}

export default CategoryModelsParser;