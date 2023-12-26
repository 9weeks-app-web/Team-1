import IndexPage from 'pages/IndexPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<IndexPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
