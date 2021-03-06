import React, {useEffect, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import proyectosContext from '../../contexts/proyectos/proyectosContext';
import 'animate.css';

const ListaProyectos = () => {
	const {proyectos} = useContext(proyectosContext);

	useEffect(() => {}, [proyectos]);

	if (proyectos)
		return (
			<div className='lista-proyectos'>
				<h3 className='lista-proyectos__titulo'>Tus proyectos actuales</h3>
				<ul className='lista-proyectos__lista'>
					{proyectos.length > 0 && (
						<>
							{proyectos.map((proyecto) => (
								<li key={proyecto._id}>
									<NavLink
										to={`/dashboard/proyectos/${proyecto.url}`}
										exact
										activeClassName='proyecto--active'
										className='lista-proyectos__proyecto animate__animated animate__fadeInUp'>
										<p className='lista-proyectos__proyecto-titulo'>
											{proyecto.titulo.length > 34 ? `${proyecto.titulo.substr(0, 35)}...` : proyecto.titulo}
										</p>
										<span className='lista-proyectos__proyecto-icon'></span>
									</NavLink>
								</li>
							))}
						</>
					)}
				</ul>
			</div>
		);
};

export default ListaProyectos;
