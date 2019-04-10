import * as loginSaga from './auth/saga';

const sagas = {
    ...loginSaga
};
export function registerWithMiddleware(middleware: { run: Function }) {
    for (let name in sagas) {
        middleware.run(sagas[name]);
    }
}
