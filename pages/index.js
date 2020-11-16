import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import { Jumbotron, Button , Container } from 'reactstrap';

function Home() {
    return (
        <>
        <Head>
            <title> Principal - Juliano </title>
            <meta name="description" content="Projeto de estudos"/>
            <meta name="description" content="Gabriel Juliano"/>
        </Head>
        <Menu></Menu>
        <Jumbotron fluid className="descr-top">
            <style>
                {`.descr-top{
                    background-color: #000;
                    color:#fed136;
                    padding-top: 150px;
                    padding-bottom: 150px;
                    margin-bottom: 0rem !important;
                }`}
            </style>
            <Container className="text-center">
                <h1 className="display-4">Título</h1>
                <p className="lead">Subtítulo</p>
                <p>
                    <a href="#" className="btn btn-outline-warning btn-lg">Entrar</a>
                </p>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="servicos">
            <style>
                {`.servicos{
                    background-color: #fff;
                    padding-top: 80px;
                    padding-bottom: 80px;
                    margin-bottom: 0rem !important;
                }`}
            </style>
            <Container className="text-center">
                <div>
                    <h2 className="display-4">Título</h2>
                    <p className="lead pb-4">Subtítulo</p>
                </div>
            </Container>
        </Jumbotron>
        </>

    )
}

export default Home;