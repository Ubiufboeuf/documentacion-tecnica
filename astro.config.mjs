// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación Técnica',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Ubiufboeuf/documentacion-tecnica' }],
			sidebar: [
				{
					label: 'Visión General',
					items: [
						{ label: 'Introducción', slug: 'overview' },
						{ label: 'Arquitectura', slug: 'overview/arquitectura' },
						{ label: 'Funcionalidades', slug: 'overview/funcionalidades' }
					]
				},
				{
					label: 'Manual del Sistema',
					items: [
						{ label: 'Frontend', slug: 'system/frontend' },
						{ label: 'Backend', slug: 'system/backend' },
						{ label: 'Flujo de Compra', slug: 'system/flujo-compra' },
						{ label: 'Seguimiento en Tiempo Real', slug: 'system/seguimiento' },
						{ label: 'Viajes Personalizados', slug: 'system/viajes-personalizados' }
					]
				},
				{
					label: 'Manual de Desarrollador',
					items: [
						{ label: 'Introducción', slug: 'developer' },
						{ label: 'Frontend (Dev)', slug: 'developer/frontend-dev' },
						{ label: 'Backend (Dev)', slug: 'developer/backend-dev' },
						{ label: 'Base de Datos', slug: 'developer/database' }
					]
				},
				{
					label: 'Infraestructura',
					items: [
						{ label: 'Despliegue', slug: 'infra/deployment' },
						{ label: 'Seguridad', slug: 'infra/seguridad' }
					]
				},
				{
					label: 'Notas de Estudio',
					items: [
								{ label: 'General', slug: 'study-notes/general' },
								{ label: 'Protocolos', slug: 'study-notes/protocolos' },
								{ label: 'Herramientas', slug: 'study-notes/herramientas' },
								{ label: 'Links', slug: 'study-notes/links' }
					]
				},
				{
					label: 'Anexos',
					items: [
								{ label: 'Changelog', slug: 'annex/changelog' },
								{ label: 'Presentaciones', slug: 'annex/canva' },
								{ label: 'Bibliografía', slug: 'annex/bibliografia' }
					]
				}
			],
		}),
	],
});
