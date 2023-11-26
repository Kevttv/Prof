import { parseCookies } from 'nookies';

export default function checkRole(req, res, next) {
    const { role } = parseCookies({ req });

    if (role !== '201') { // Si el rol no es el de barbero
        res.writeHead(302, { Location: '/not-found' }); // Redirige al usuario a la página de "No encontrado"
        res.end();
        return;
    }

    next();
}