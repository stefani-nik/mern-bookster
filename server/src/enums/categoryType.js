import { Enum } from 'enumify'

class CategoryType extends Enum {}

CategoryType.initEnum(['book', 'article', 'category']);

export default CategoryType;