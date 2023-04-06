import { render, screen } from '@testing-library/react';
import { About } from './About';
import { BrowserRouter } from 'react-router-dom';

describe('Catalog Item Component', () => {
    test('Show title', () => {
        const title = 'Living Wall';
        const eco = 'Moss Wall';
        const lifespan = 'Lifespan';
        const aboutMoss = 'What About Moss';
        const environment = 'Environment';


        render(
            <BrowserRouter>
                <About title={title} />;
            </BrowserRouter>
        )

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(eco)).toBeInTheDocument()
        expect(screen.getByText(lifespan)).toBeInTheDocument()
        expect(screen.getByText(aboutMoss)).toBeInTheDocument()
        expect(screen.getByText(environment)).toBeInTheDocument()
    });

    test('Show eco', () => {
        const eco = 'Moss Wall';


        render(
            <BrowserRouter>
                <About title={eco}/>;
            </BrowserRouter>
        )

        expect(screen.getByText(eco)).toBeInTheDocument()
    });

    test('Show title', () => {
        const lifespan = 'Lifespan';


        render(
            <BrowserRouter>
                <About title={lifespan} />;
            </BrowserRouter>
        )

        expect(screen.getByText(lifespan)).toBeInTheDocument()
    });

    test('Show title', () => {
        const aboutMoss = 'What About Moss';


        render(
            <BrowserRouter>
                <About title={aboutMoss} />;
            </BrowserRouter>
        )

        expect(screen.getByText(aboutMoss)).toBeInTheDocument()
    });

    test('Show title', () => {
        const environment = 'Environment';


        render(
            <BrowserRouter>
                <About title={environment} />;
            </BrowserRouter>
        )

        expect(screen.getByText(environment)).toBeInTheDocument()
    });

});