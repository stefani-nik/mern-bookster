import { Enum } from 'enumify'

class PostType extends Enum {}

PostType.initEnum(['Book', 'Magazine', 'Article']);

export default PostType;