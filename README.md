# Frameory – Photo Printing & Custom Frames

Status: **Day 1 (frontend foundation) written, NOT yet built or tested.**
Backend, database, upload, cart, checkout, auth and admin are not started.

## Run the frontend

```bash
cd frontend
npm install
npm start            # dev server on http://localhost:4200
npm run build        # production build -> dist/photo-frame-shop/browser
```

If `npm install` reports a peer-dependency or version error, adjust the `@angular/*`
versions in `frontend/package.json` to the Angular version your CLI installs
(the spec asks for Angular 22; confirm with `npx ng version`).

## Before launch
- Set `whatsappNumber`, `contactEmail`, `contactPhone` in `frontend/src/environments/*.ts`.
- Catalogue data in `core/services/catalog.service.ts` and testimonials in `home.component.ts` are SAMPLE data.
