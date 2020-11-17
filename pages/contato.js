import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import { Jumbotron, Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';

function Home() {
    return (
        <>
            <Head>
                <title> Contato </title>
                <meta name="description" content="contato com a empresa" />
                <meta name="description" content="Gabriel Juliano" />
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
                    <h1 className="display-4">Contato</h1>
                    <p>
                        <a href="#" className="btn btn-outline-warning btn-lg">Entrar</a>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="form-contato">
                <style>
                    {`.form-contato{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="text" name="name" id="name" placeholder="Insira seu nome completo"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Insira seu email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="subject">Assunto</Label>
                            <Input type="text" name="subject" id="subject" placeholder="Assunto da mensagem"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Conteúdo</Label>
                            <Input type="textarea" name="content" id="content" placeholder="Conteúdo da mensagem"/>
                        </FormGroup>
                        <Button type="submit" outline color="warning">Enviar</Button>
                    </Form>
                </Container>
            </Jumbotron>
            <Rodape />
        </>

    )
}

export default Home;