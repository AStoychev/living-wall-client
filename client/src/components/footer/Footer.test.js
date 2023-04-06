import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Catalog Item Component', () => {
    test('Show title', () => {
        const title = 'You can also find us at';

        render(
            <BrowserRouter>
                <Footer title={title} />;
            </BrowserRouter>
        )

        expect(screen.getByText(title)).toBeInTheDocument()
    });

});