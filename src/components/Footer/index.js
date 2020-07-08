import React from "react";

import { Container } from "./styles";

export default function Footer() {
    return (
        <Container>
            <p>
                Developed by <strong>Victor de Souto</strong>
            </p>
            <ul>
                <li>
                    <a
                        href="https://github.com/sudo-victor"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        github
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/viktor_souto/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        instagram
                    </a>
                </li>
            </ul>
        </Container>
    );
}
