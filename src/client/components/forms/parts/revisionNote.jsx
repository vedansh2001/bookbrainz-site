/*
 * Copyright (C) 2015  Ben Ockmore
 *               2015  Sean Burke
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var RevisionNote = React.createClass({
	render: function() {
		'use strict';

		return (
			<div className={(this.props.visible === false) ? 'hidden' : ''}>
				<h2>Submit Revision</h2>
				<p className='lead'>Finally, add this revision to an edit.</p>

				<div className='form-horizontal'>
					<Input
						type='textarea'
						label='Revision Note'
						ref='note'
						labelClassName='col-md-3'
						wrapperClassName='col-md-6'
						rows='6' />
				</div>

				<nav className='margin-top-1'>
					<ul className="pager">
						<li className="previous">
							<a href='#' onClick={this.props.backClick}><span aria-hidden="true" className='fa fa-angle-double-left'/> Back
							</a>
						</li>
						<li className="next">
							<a href='#' onClick={this.props.onSubmit} disabled={this.props.submitDisabled}>Submit
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
});

module.exports = RevisionNote;