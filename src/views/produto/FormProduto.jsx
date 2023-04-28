import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{

	state = {

		codigo: null,
		titulo: null,
		descricao: null,
		valorUnitario: null,
		tempoEntregaMinimo: null,
		tempoEntregaMaximo:null
	}
	salvar = () => {

		let produtoRequest = {

			codigo: this.state.codigo,
			titulo: this.state.titulo,
			descricao: this.state.descricao,
			tempoEntregaMinimo: this.state.tempoEntregaMinimo,
			tempoEntregaMaximo: this.state.tempoEntregaMaximo
		}
	
		axios.post("http://localhost:8082/api/produto", produtoRequest)
		.then((response) => {
			console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um produto.')
		})
	}
	

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Título:'	
										maxLength="100"
                                        placeholder ="Informe o Título do Produto"
										value={this.state.titulo}
			                           onChange={e => this.setState({titulo: e.target.value})}
									/>

									<Form.Input
                                        required
										fluid
										label='Código do Produto'>
										<InputMask 
										mask="999.999.999-99"
                                         placeholder ="Informe o Código do Produto"
										 value={this.state.codigo}
			                           onChange={e => this.setState({codigo: e.target.value})}
                                        /> 
                                        
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

                                
									<Form.TextArea
										fluid
										label='Descrição:'
                                        width={16}
                                        placeholder ="Informe a descrição do Produto"
										value={this.state.descricao}
			                           onChange={e => this.setState({descricao: e.target.value})}
                                        >
									
                                        </Form.TextArea>
                                  </Form.Group>
                                  <Form.Group>
									<Form.Input
                                        required
										fluid
										label='Valor Unitário:'
                                        width={7}
								         maxLength="3"
										 value={this.state.valorUnitario}
			                           onChange={e => this.setState({valorUnitario: e.target.value})}
										 >
									</Form.Input>

                             
									<Form.Input
									    required
                                        fluid
                                        label='Tempo de Entrega Minimo:'
                                        width={6}         
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    	value={this.state.tempoEntregaMinimo}
										onChange={e => this.setState({tempoEntregaMinimo: e.target.value})} 
                                        >
                                    </Form.Input>
                                    
								   <Form.Input
									    required
                                        fluid
                                        label='Tempo de Entrega Maximo:'
                                        width={6}                           
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    	value={this.state.tempoEntregaMaximo}
										onChange={e => this.setState({tempoEntregaMaximo: e.target.value})} 
                                >
                                    </Form.Input>
                             
								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									
								<Link to={'/list-produto'}>
									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
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

export default FormProduto;