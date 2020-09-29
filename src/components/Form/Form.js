import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import selectorsContact from '../../redux/contacts/contacts-selector';
import contactOperation from '../../redux/contacts/contacts-operation';
import style from './Form.module.css';
import AlertStyle from './alert.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
    alert: false,
  };
  inputChannge = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  addContact = e => {
    e.preventDefault();
    if (this.props.items.some(el => el.name === this.state.name)) {
      this.setState({ alert: true });
      setTimeout(() => this.setState({ alert: false }), 3000);
    } else {
      const nameTel = {
        name: this.state.name,
        number: this.state.number,
      };
      this.props.onSubmit(nameTel);
      this.setState({ name: '', number: '' });
    }
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <CSSTransition
          appear={this.state.alert}
          in={this.state.alert}
          timeout={500}
          unmountOnExit
          classNames={AlertStyle}
        >
          <p className={AlertStyle.alert}>Already exist</p>
        </CSSTransition>
        <form className={style.form} onSubmit={this.addContact}>
          <label className={style.label}>
            Name{' '}
            <input
              className={style.input}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.inputChannge}
              required
            />
          </label>
          <label className={style.label}>
            Phone{' '}
            <input
              className={style.input}
              placeholder="Phone"
              pattern="^[0-9-+\s()]*$"
              title="[0-9]"
              type="tel"
              name="number"
              value={number}
              onChange={this.inputChannge}
              required
            />
          </label>
          <button className={style.button} type="submit">
            Add Contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: selectorsContact.getItems(state),
});
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: value => dispatch(contactOperation.addContact(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
