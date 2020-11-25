// import {usestate} from 'react';

import { eventData } from "./../data.js"
import {CardDeck, Accordion, Row, Col,Container, Card,Button} from 'react-bootstrap';

function Home() {
    // const [evento, setEvento]= usestate();
    return (
            <>
                <div>
                    <div>
                        <Container >
                            
                            <div >
                                <Row className="cont" >
                                    <div className="wall"> .</div>
                                        <Col  className="colonna1" >
                                            <p id="text"><img src="https://free-icon-rainbow.com/i/icon_04726/icon_047260_256.png" width="20" height="20"></img> Le tue attività</p>
                                                {eventData.filter(data => (data.attività === true))
                                                    .map(datiAttesi => (
                                                        (<Card className="eventCard"><Card.Img variant="top" src={datiAttesi.url} />
                                                        <Card.Body >
                                                            <Card.Title className="title-mobile">
                                                                {datiAttesi.name}
                                                            </Card.Title>
                                                            <Card.Text>
                                                                Lorem ipsum dolor sit amet
                                                            </Card.Text>
                                                            <Button variant="link">></Button>
                                                        </Card.Body></Card>)
                                                    ))
                                                }
                                        </Col>
                                    <br/>
                                
                                        <Col className="colonna2">
                                            <p id="text"><img src="https://img.icons8.com/pastel-glyph/2x/clock.png" width="20" height="20"></img> Attività in sospeso</p>
                                                {eventData.filter(data => (data.attività !== true))
                                                .map(datiAttesi => (
                                                    (<Card className="eventCard" ><Card.Img variant="top" src={datiAttesi.url} />
                                                        <Card.Body >
                                                            <Card.Title>{datiAttesi.name}</Card.Title>
                                                            <Card.Text>
                                                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                            </Card.Text>
                                                            <Button variant="link">></Button>
                                                        </Card.Body>
                                                    </Card>)
                                                ))
                                                }
                                        </Col>
                                </Row>
                                </div>
                                <br/><br/>
                                <div>
                                    <div className="scopri">
                                        <p>Allenati con noi nell'Arco della Pace <br/>Tutte le domeniche</p>
                                            <Button variant="primary" size="lg">
                                                    Scopri di più
                                            </Button>
                                    </div>
                                <br/>
                                <div className="avvisi">
                                    <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAflBMVEX///8AAAAEBAT8/Pzl5eWoqKgWFhYICAg8PDzz8/Otra339/
                                    eOjo4gICDw8PD29vYRERGYmJjMzMxqamp3d3eEhITr6+u8vLxQUFBLS0sbGxuamppgYGBERETc3NzT09MqKio1NTV+fn5aWlq4uLhfX182NjYuLi6rq6vFxcXedpc6AAAGIUlEQVR
                                    4nO2da3eqOhCGBUFwCxZEvNSKF1DL//+DxwnQTU/xmrwTu1eeb7SuSQLJ3DKEXs9gMBgMBoPBYDAYDAaDwWAwGAyGxxi5i9Dzwtwd6e6JHO67VfPu6u6LBP3EsrbBZDyeBKFlJX3d/
                                    XmaxLKDuvf9wLYSvb15Htey53+vCtv61NcXGfqhlbavUyv8dSt+PI+n+cmyIqvF+eKUT+P5WHfv7sRZHbbWVbYfK0d3L2+xSXfXB9FwTDPdfb3M6HN93ygqdqs33T3uZLwffPXRO36k
                                    bpk535bD2MlKN/042l8/G+xfb70M02Zh2+u0vKqdRmW6bgYTpUOuHt7HKmpGsZrd8/tZ3IxlsEL37QGyem1EyQMrOJvWg/c3uJ49RD+tbu578OA0GQbVqrLTl/DCZtXj8KZPLNxmZa1
                                    fwK4U1V3Nn+yKk1crZX77p1hWYloN/jwvoRAhix2r69Mz7MX9XNylqS4xWwghe1V9eoZEdCG9/cPrpEKMxnBlKnSuxLRqKCKtIxHjGCixAhOhMqYqRD2OmBDviqzZRowkUCPsMQoxDmXO
                                    eEbKyy5UiXugYZrWkULvYqNa4H28URRoKzVjBZmkLXeMIhSvYsc11qC65tTmh2qpwl1hdVbGIc0C5TGREBtyhlpkQeyJermlzeurZB7KetEd8vjyKzSXB5C8wZCsSY6Q3MWE1iRol8Al2Y
                                    BJ2wk9kCNK+I7vkWS0IhW4vN38IT3Cs0rIFp5w4k9cbvAowq0QglZJxLH/8EkqC5i/GQ2QM7fFAu0Q0dRdIBuoGHto/Uja3cNnt2kKb7FNUISA325M8EolYfHm6XaBA9IC/9B7PYcmMDiK
                                    G5LFRWeDyfD64DZ6PoMCTjnmb6IifXmDXH2o/pOYwXEkT6gEt9Ersd6cgMwh3FiNSaNgmyClFWGbICK42uJ46D2OCezyOHQLbKRwJuDJBSbwzDy+BQH+fi15gh7yH5bQFrY8yZoJ3G0kvS
                                    i1hXsfM7QhgTfQ4IFv2ITHjOCnMH4R1qCVCpMZwat5JjOCD3vwrkMN2hViiUYItHOKd69rwOECQ8DTgA3gNhwJpwoyJLgqCMqcrWHSv7GG5gFjvsqEj3NTuOrAKUO+qSaFpphzLjNSGRJcam
                                    vHZUYqQ7KDSR9wmZHKkAxQwt9o55ip+rtPGXlUeQ2ZkRAk+wch0JAwmpFqawFlSGJEsdklDkBDMuUsptoDDQnL3kjDCmhIfM6Kwzlwj4+Kwtiq2zIqj8aIHlFNGNvbtsDWgPeoC9zzR87aDnA
                                    rEqlHOsDpSKRm7wBntQ6cZqTyIw4Qydgw+gc4zw7pj3YA87VFhMD4dgcs+oHGbF2g4tESWX/dBSpDgM1rdIBK/WMzTR2gsmjY3F8HqICU2YxUG5YIQ4LNj3eAyv2zlJy1Ae3GMJWctcHsjzGVn
                                    LXB7FgylZy1wRgSloLf72DKf9lqBf6CqbNgKjlrA6h8cYIF/P2Xn4g3YhaBOsXlHOoDixhKztrMqlbtg6KhuN9OklOOyDD5rSv/66/NaZWRkvd7Yugwrg6k+Dp3U4G3+kcIOgUbLSd6DTfBSXRAWs
                                    +IMyrsWOO5Uf2YVmgku04oClF7RsXjzGkkkpGJeMFY80FLlWW05R4JiThpP4+sT7GQnFuxlJagBLqfcjaeObt4CfmsIzkmL3CS4tCSDRaj1xgIRb1y4Sl7xqEb+TzEP7PYydHavob6lbNmzr9iEEWE
                                    +xIuimzM6winMdDpNAZKnMbajd/qc+OrA7YVZJ3RgdVdKFmmBTbUvYNI0S7ALLFvN4bDThTmUeLl1tMxCG+7jLWdBXy6VQszB5YmqyS/5dSkoNIM1cS3svZLzpIWCTLLu5qSnHlcdemy+NfnVspZviaFe
                                    /VDI28hd1b/afqna5UF0xdIy9zLxL58rGZ55X+vR3LxRGMn1HVg9FOM1lbYqZnO41j/qg/1DH3rvWNnuQyt4wskZR5h5lt2+r96u7fUtnzmXS95+lP6/kVrKOLbFvtfo7BazI9n73UZlNlwmJXB8uw9n7R
                                    /CuJJCr/tkvufv/Fx1GRxvhvY9mCX6wsrDAaDwWAwGAwGg8FgMBgMBoPB8Fv5D102RFK2rlVZAAAAAElFTkSuQmCC" width="20" height="25"></img> AVVISI</p>
                                    <a href=""> Mostra tutti</a>
                                </div>
                                <div>
                                
                                </div>
                                    <Accordion defaultActiveKey="0">
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                Chiusure straordinarie per vacanze di Natale
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                <Card.Body>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Card.Body>
                                                </Accordion.Collapse>
                                        </Card>
                                    </Accordion> 

                                <div className="downloadApp">
                                    <p>SCARICA ORA LA NUOVA APP</p>
                                        <input type="image" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="120" height="50" />
                                        <input type="image" src="https://www.studioellipse.com/wp-content/uploads/2017/10/apple-store-badge.png" width="120" height="50" />
                                </div>
                                
                                <div className="magazine">
                                    <p><img src="https://www.clipartmax.com/png/middle/36-362208_simple-newspaper-icon-newspaper-and-magazine-icon.png" width="20" height="20"></img> MAGAZINE</p>
                                    <a href=""> Mostra tutti</a>
                                </div>
                                    <CardDeck className="cardDeck">
                                            <Card className="cardBody">
                                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqz59cdoKwjSIbBKRRYP0OPxotLQPgO1dyg&usqp=CAU" />
                                                <Card.Body >
                                                <Card.Title className="cardMagazine">GLI EVENTI DI DICEMBRE E GENNAIO</Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                </Card.Text>
                                                <Button>></Button>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className="text-muted">16/12/2019</small>
                                                </Card.Footer>
                                            </Card>
                                            <Card className="cardBody">
                                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqz59cdoKwjSIbBKRRYP0OPxotLQPgO1dyg&usqp=CAU" />
                                                <Card.Body >
                                                <Card.Title className="cardMagazine">GLI EVENTI DI DICEMBRE E GENNAIO</Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                </Card.Text>
                                                <Button>></Button>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className="text-muted">16/12/2019</small>
                                                </Card.Footer>
                                            </Card>
                                            <Card className="cardBody">
                                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqz59cdoKwjSIbBKRRYP0OPxotLQPgO1dyg&usqp=CAU" />
                                                <Card.Body >
                                                <Card.Title className="cardMagazine">GLI EVENTI DI DICEMBRE E GENNAIO</Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                </Card.Text>
                                                <Button className="btn-mobile">></Button>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className="text-muted">16/12/2019</small>
                                                </Card.Footer>
                                            </Card>
                                    </CardDeck>
                                <div>
                                    <footer className="social">
                                        <div class="col-12">
                                            <input type="image" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" width="30" height="30" />
                                            <input type="image" src="https://image.flaticon.com/icons/png/512/124/124010.png" width="30" height="30" />
                                            <input type="image" src="https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-youtube-icon-logo-by-vexels.png" width="35" height="35" />
                                            <select  name ="languages " >
                                                <option value="ENG">ENG</option>
                                                <option value="ITA">ITA</option>
                                                <option value="FRA">FRA</option>
                                            </select>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </>
    );
}
export default Home;