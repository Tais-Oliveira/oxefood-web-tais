import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/constante';


const ufList = [
	{ key: 'o', text: 'Alagoas', value: 'AL' },
	{ key: 'f', text: 'Paraíba', value: 'PB' },
	{ key: 'm', text: 'Pernambuco', value: 'PE' },
  ]

  export default function FormEntregador () {
	
	const { state } = useLocation();
    
	
		const [idEntregador, setIdEntregador] = useState();
		const [nome, setNome] = useState();
		const [cpf, setCpf] = useState();
		const [rg, setRg] = useState();
		const [dataNascimento, setDataNascimento] = useState();
		const [foneCelular, setFoneCelular] = useState();
		const [foneFixo, setFoneFixo] = useState();
        const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
		const [valorFrete, setValorFrete] = useState();
		const [enderecoEstado, setEnderecoEstado] = useState();
		const [enderecoRua, setEnderecoRua] = useState();
		const [enderecoNumero, setEnderecoNumero] = useState();
		const [enderecoBairro, setEnderecoBairro] = useState();
		const [enderecoCidade, setEnderecoCidade] = useState();
		const [enderecoCep, setEnderecoCep] = useState();
        const [enderecoUf, setEnderecoUf] = useState();
		const [enderecoComplemento, setEnderecoComplemento] = useState();
		const [ativo, setAtivo] = useState();
		

	
	useEffect(() => {
		if (state != null && state.id != null) {
			axios.get(ENDERECO_API + "api/entragador/" + state.id)
	.then((response) => {
		                   setIdEntregador(response.data.id)
						   setNome(response.data.nome)
						   setCpf(response.data.cpf)
						   setRg(response.data.rg)
						   setDataNascimento(response.data.dataNascimento)
						   setFoneCelular(response.data.foneCelular)
						   setFoneFixo(response.data.foneFixo)
						   setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
						   setValorFrete(response.data.valorFrete)
						   setEnderecoEstado(response.data.enderecoEstado)
						   setEnderecoRua(response.data.enderecoRua)
						   setEnderecoNumero(response.data.enderecoNumero)
						   setEnderecoBairro(response.data.enderecoBairro)
						   setEnderecoCidade(response.data.enderecoCidade)
						   setEnderecoCep(response.data.enderecoCep)
						   setEnderecoUf(response.data.enderecoUf)
						   setEnderecoComplemento(response.data.enderecoComplemento)
						   setAtivo(response.data.ativo)
						   
						   
			})
		}
	}, [state])

	function salvar (){

		let entregadorRequest = {

			nome:nome,
			cpf:cpf,
            rg:rg,
			dataNascimento:dataNascimento,
			foneCelular:foneCelular,
			foneFixo:foneFixo,
            qtdEntregasRealizadas:qtdEntregasRealizadas,
            valorFrete:valorFrete,
            enderecoRua:enderecoRua,
            enderecoNumero:enderecoNumero,
            enderecoBairro:enderecoBairro,
            enderecoCidade:enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf:enderecoUf,
            enderecoComplemento:enderecoComplemento,
            ativo:ativo
		}

		axios.post(ENDERECO_API + "api/entregador", entregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um entregador.')
		})
	}

 
        return(
            <div>
	
                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >


					{ idEntregador === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{ idEntregador != undefined &&
						<h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}
                       
                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

                                <Form.Input

										required
										fluid
										label='Nome:'
										placeholder="Maria de Lourdes"
										maxLength="100"
										value={nome}
			                           onChange={e => setNome (e.target.value)}
									/>

									<Form.Input
									    required
										fluid
										label='CPF:'>
										<InputMask 
										mask="999.999.999-99"
										placeholder="150.456.879-09"
										value={cpf}
										onChange={e => setCpf (e.target.value)} 
										/> 
									</Form.Input>
							

                                    <Form.Input
									    required
										fluid
										label='RG:'>
                                      
										<InputMask 
										mask="999.999.999"
										placeholder="123.444-09"
										value={rg}
										onChange={e => setRg (e.target.value)} 
										/> 
									</Form.Input>


                                    </Form.Group>
								
                                    <Form.Group>
                                    <Form.Input
									    required
                                        fluid
                                        label='Data de Nascimento:'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 18/08/2003"
                                        	value={dataNascimento}
										onChange={e => setDataNascimento (e.target.value)} 
                                        /> 
                                    </Form.Input>

                                    <Form.Input
									    required
										fluid
										label='Fone Celular:'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										placeholder="(81) 9 8765-2134"
										value={foneCelular}
										onChange={e => setFoneCelular(e.target.value)} 
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

										value={foneFixo}
										onChange={e => setFoneFixo (e.target.value)} 
										/> 
									</Form.Input>

                                    </Form.Group>

                                    <Form.Group>

                                    <Form.Input
                                        required
										fluid
										label='Quantidade de Entregas Realizadas:'
                                        width={6}
								        maxLength="3"		
										placeholder="12" 
                                        value={qtdEntregasRealizadas}
										onChange={e => setQtdEntregasRealizadas(e.target.value)} 
                                    />
									

                                    <Form.Input
                                        required
										fluid
										label='Valor do Frete:'
                                        width={6}
                                        maxLength = "3"
										placeholder="R$ 99.99"
                                        value={valorFrete}
										onChange={e => setValorFrete (e.target.value)} 
                                      />
									
                                    
                                    <Form.Input
										required
										fluid
										label='Endereço da Rua:'
										width={6}
										maxLength="100"
										placeholder="Rua  Joaquim"
										value={enderecoRua}
			                           onChange={e => setEnderecoRua (e.target.value)}
									/>
                            </Form.Group>
                            <Form.Group>
                                    <Form.Input
                                        required
										fluid
										label='Endereço do Número:'
                                        width={6}
										>
										<InputMask 
										mask="99" 
										placeholder="215"
                                        value={enderecoNumero}
										onChange={e =>setEnderecoNumero (e.target.value)} 
                                        /> 
									</Form.Input>

                                    <Form.Input
										required
										fluid
										label='Endereço do Bairro:'
										width={6}
										placeholder="Vila-Rica"
										maxLength="100"
										value={enderecoBairro}
			                           onChange={e => setEnderecoBairro (e.target.value)}
									/>
                            
                                    <Form.Input
										required
										fluid
										label='Endereço da Cidade:'
										width={6}
										placeholder="Jaboatão"
										maxLength="100"
										value={enderecoCidade}
			                           onChange={e => setEnderecoCidade(e.target.value)}
									/>
                                </Form.Group>
                                <Form.Group>
                                     <Form.Input
                                        required
										fluid
										label='Endereço do Cep:'
										width={6}
										>
										<InputMask 
										mask="99999-999" 
										placeholder="12344-786"
                                        value={enderecoCep}
										onChange={e => setEnderecoCep( e.target.value)} 
                                        /> 
									</Form.Input>
                             
                                     
                                    <Form.Input
										required
										fluid
										label='Endereço Uf:'
										width={6}
										maxLength="2"
										placeholder="PE"
										value={enderecoUf}
			                           onChange={e => setEnderecoUf( e.target.value)}
									/>
										
								<Form.Select
									fluid
									label='UF'
									options={ufList}
									placeholder='Selecione'
									value={enderecoEstado}
									onChange={(e,{value}) => {setEnderecoEstado (value)
								}}
								/>
                                    
                                       <Form.Input
										required
										fluid
										label='Endereço de Complemento:'
										width={6}
										placeholder="Perto do Hospital"
										maxLength="100"
										value={enderecoComplemento}
			                           onChange={e => setEnderecoComplemento(e.target.value)}
									/>
                            
                                   </Form.Group>
                      
								   <Form.Group inline>

                               <label>Ativo: </label>

                               <Form.Radio
	                            label='Sim'
	                            checked={ativo}
	                            onChange={e => setAtivo (true
	                                 )}
                                  />

                              <Form.Radio
	                            label='Não'
	                            checked={!ativo}
	                            onChange={e => setAtivo(false)}
                                               />
 
                                     </Form.Group> 
								
							
								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

								  <Link to={'/list-entregador'}>
									<Button
										type="button"
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
											onClick={salvar}
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
