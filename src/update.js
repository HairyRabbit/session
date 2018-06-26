/**
 * session state reducer
 *
 * @flow
 */

export default function update(model: Model, action: Action): Model {
  const { type, payload } = action || {}

  if(!type) {
    return model
  }
}
