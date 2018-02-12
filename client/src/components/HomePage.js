import React, { Component } from 'react';
import '../styles/Homebody.css';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Row,
    Col
} from 'reactstrap';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false
        };
    }

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit = () => {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    render() {
        return (
            <div className="HomeBodyCSS">
                <div className="container">
                    <br /> <br /> <br /> <br />
                    <h1>Welcome to ProSolver</h1>
                    <p>Never Stop Learning, Because Life Never Stops Teaching.</p>

                    <br /> <br />

                    <Row>
                        <Col xs={{ size: 12, offset: 0 }} sm={{ size: 8, offset: 2 }}>
                            <InputGroup>
                                <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                    <DropdownToggle caret>
                                        Filter By
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header> <i class="fas fa-book"></i> Book</DropdownItem>
                                        <DropdownItem disabled> <i class="fas fa-book"></i> Course</DropdownItem>
                                        <DropdownItem> <i class="fas fa-book"></i> Topic</DropdownItem>
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
                                <Input placeholder="Search Books, Courses and Topics..."/>
                                <InputGroupAddon addonType="append"><Button><i class="fas fa-search"></i></Button></InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col xs={{ size: 12, offset: 0 }} sm={{ size: 8, offset: 2 }}>
                            <InputGroup>
                                <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                                    <Button outline>
                                        Filter By
                                    </Button>
                                    <DropdownToggle split outline />
                                    <DropdownMenu>
                                        <DropdownItem> <i class="fas fa-book"></i> Book</DropdownItem>
                                        <DropdownItem> <i class="fas fa-book"></i> Course</DropdownItem>
                                        <DropdownItem> <i class="fas fa-book"></i> Topic</DropdownItem>
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
                                <Input placeholder="Search Books, Courses and Topics..." />
                                <InputGroupAddon addonType="append"><Button><i class="fas fa-search"></i></Button></InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;
