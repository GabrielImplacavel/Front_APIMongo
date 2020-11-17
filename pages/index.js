import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import { Jumbotron, Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Home({ data }) {
    return (
        <>
            <Head>
                <title> Principal - Juliano </title>
                <meta name="description" content="Projeto de estudos" />
                <meta name="description" content="Gabriel Juliano" />
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
                }.circulo{
                    width: 140px;
                    height: 140px;
                    background-color: #fed136;
                    font-size: 52px;
                    padding-top: 24px;
                    color: #fff;
                }.centralizar{
                    margin: 0 auto !important;
                    float: none !important;

                }`}
                </style>
                <Container className="text-center">
            <h1 className="display-4">{data.home.topTitulo}</h1>
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
                    <div className="row">
                        <div className="col-md-4">
                            <div className='rounded-circle circulo centralizar'>
                                <FontAwesomeIcon icon={["fas","code"]}/>
                        </div>
                            <h2 className="magin-top-4">Serviço 1</h2>
                            <p>Descrição</p>
                        </div>
                        <div className="col-md-4">
                            <div className='rounded-circle circulo centralizar'>
                            <FontAwesomeIcon icon={["fas","laptop-code"]}/>
                        </div>
                            <h2 className="magin-top-4">Serviço 2</h2>
                            <p>Descrição</p>
                        </div>
                        <div className="col-md-4">
                            <div className='rounded-circle circulo centralizar'>
                            <FontAwesomeIcon icon={["fas","mobile-alt"]}/>
                        </div>
                            <h2 className="magin-top-4">Serviço 3</h2>
                            <p>Descrição</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Rodape></Rodape>
        </>
    )
}

export async function getServerSideProps(){
    const response = await fetch(`http://localhost:8080/home`);
    const data = await response.json();
    return{props: {data}};
}
export default Home;