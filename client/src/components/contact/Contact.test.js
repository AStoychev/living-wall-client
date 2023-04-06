import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import { BrowserRouter } from 'react-router-dom';

describe('Catalog Item Component', () => {
    test('Show title', () => {
        const title = 'We Are Here';

        render(
            <BrowserRouter>
                <Contact title={title} />;
            </BrowserRouter>
        )

        expect(screen.getByText(title)).toBeInTheDocument()
    });

    test('Show contact', () => {
        const contact = 'Contact: +359 891 111 111';

        render(
            <BrowserRouter>
                <Contact title={contact} />;
            </BrowserRouter>
        )

        expect(screen.getByText(contact)).toBeInTheDocument()
    });

    test('Show email', () => {
        const email = 'Email: livingwall@gmail.com';

        render(
            <BrowserRouter>
                <Contact title={email} />;
            </BrowserRouter>
        )

        expect(screen.getByText(email)).toBeInTheDocument()
    });

    test('Show street', () => {
        const street = 'Our Office: Hristo Botev St, Hisarya, 4180';

        render(
            <BrowserRouter>
                <Contact title={street} />;
            </BrowserRouter>
        )

        expect(screen.getByText(street)).toBeInTheDocument()
    });

    test('Show map', () => {
        const map = 'map';

        render(
            <BrowserRouter>
                <Contact title={map} />;
            </BrowserRouter>
        )

        expect(screen.getByRole(map)).toBeInTheDocument()
    });

});