function Footer() {
    const currentYear = new Date().getFullYear(); // Obtém o ano atual

    return (
        <footer>
            <p>Todos os direitos reservados &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;
