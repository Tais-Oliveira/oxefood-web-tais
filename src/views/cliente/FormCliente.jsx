import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormCliente extends React.Component{

	state = {

		nome: null,
		cpf: null,
		dataNascimento: null,
		foneCelular: null,
		foneFixo: null
	}
	salvar = () => {

		let clienteRequest = {

			nome: this.state.nome,
			cpf: this.state.cpf,
			dataNascimento: this.state.dataNascimento,
			foneCelular: this.state.foneCelular,
			foneFixo: this.state.foneFixo
		}
	
		axios.post("http://localhost:8082/api/cliente", clienteRequest)
		.then((response) => {
			console.log('Cliente cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um cliente.')
		})
	}

	render(){

        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome:'
										maxLength="100"
										placeholder="Maria de Lourdes"
										value={this.state.nome}
			                           onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
                                        required
										fluid
										label='CPF:'>
										<InputMask 
										mask="999.999.999-99"
										placeholder="150.456.879-09"
										value={this.state.cpf}
										onChange={e => this.setState({cpf: e.target.value})} 
										/> 
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

									<Form.Input
									    required
										fluid
										label='Fone Celular:'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										placeholder="(81) 9 8765-2134"
										value={this.state.foneCelular}
										onChange={e => this.setState({foneCelular: e.target.value})} 
										/> 
									</Form.Input>

									<Form.Input
									    required
										fluid
										label='Fone Fixo:'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										placeholder="(81) 9 8765-2134"
										value={this.state.foneFixo}
										onChange={e => this.setState({foneFixo: e.target.value})} 
										/> 
									</Form.Input>

                                    <Form.Input
									    required
                                        fluid
                                        label='Data de Nascimento:'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        /> 
                                    </Form.Input>

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

								<Link to={'/list-cliente'}>
								<Button
                                  inverted
                                  circular
                                  icon
                                  labelPosition='left'
                                  color='orange'
                                >
                               <Icon name='reply' />
                               Voltar
                               </Button></Link>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormCliente;