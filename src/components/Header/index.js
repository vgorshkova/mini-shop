import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem} from 'react-bootstrap'

function Header () {
	return (
		<header>
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Invoice App</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem>
							<Link to="/invoices">Invoices</Link>
						</NavItem>
						<NavItem>
							<Link to="/customers">Customers</Link>
						</NavItem>
						<NavItem>
							<Link to="/products">Products</Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;