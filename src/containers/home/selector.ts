import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'
import { Category } from '../../domain/model/Category'

export interface StateProps {
  articles: Article[]
  categories: Category[]
  users: User[]
}

const articles = (state: State) => state.entities.articles

const users = (state: State) => state.entities.users

const categories = (state: State) => state.entities.categories

export default createStructuredSelector<State, StateProps>({
  articles,
  categories,
  users,
})