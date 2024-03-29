// @refresh reload
import './root.css';
import { Suspense } from 'solid-js';
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
	Link,
} from 'solid-start';

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>NPA Quiz</Title>
				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta
					name="description"
					content="A NATO phonetic alphabet quiz!"
				/>
				<Link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<Link rel="shortcut icon" href="/favicon.ico" />
				<Link rel="manifest" href="/site.webmanifest" />
				<script
					async
					src="https://analytik.uncenter.dev/script.js"
					data-website-id="a93d333e-98cf-4c17-8cc3-7aea7de996c8"
				/>
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
