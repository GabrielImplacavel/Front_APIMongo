import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import { Jumbotron, Container } from 'reactstrap';

function Home() {
    return (
        <>
        <Head>
            <title> Sobre Empresa </title>
            <meta name="description" content="sobre a empresa"/>
            <meta name="description" content="Gabriel Juliano"/>
        </Head>
        <Menu></Menu>
        <Jumbotron fluid className="descr-top">
            <style>
                {`.descr-top{
                    background-color: #000;
                    color:#fed136;
                    padding-top: 100px;
                    padding-bottom: 50px;
                    margin-bottom: 0rem !important;
                }`}
            </style>
            <Container className="text-center">
                <h1 className="display-4">Sobre</h1>
                <p>
                    <a href="#" className="btn btn-outline-warning btn-lg">Entrar</a>
                </p>
            </Container>
        </Jumbotron>
        </>

    )
}

export default Home;