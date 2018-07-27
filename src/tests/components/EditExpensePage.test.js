import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses'
import {EditExpensePage} from '../../components/EditExpensePage';
import ExpenseForm from '../../components/ExpenseForm';

let editExpense, removeExpense, history, wrapper ;

beforeEach(()=> {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn()}
  wrapper = shallow(
    <EditExpensePage 
        editExpense = {editExpense}
        removeExpense = {removeExpense}
        history = {history}
        expense = {expenses[2]}
    />
  )
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(history.push).toHaveBeenCalledWith('/')
  expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2])
});

test('should handle removeExpense correctly', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenCalledWith('/')
  expect(removeExpense).toHaveBeenCalledWith({id: expenses[2].id})
});