/**
 * session model
 *
 * @flow
 */

export type Model<T> = {
  currentUser: ?T,
  accessToken: ?string
}

const init: Model = {
  currentUser: null,
  accessToken: null
}

export default init
