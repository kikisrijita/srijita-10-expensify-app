import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortby to amount', ()=> {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
}) 

test('should set sortby to date', () => {
    const newState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(newState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('should set settext filter', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'srijita' })
    expect(state.text).toBe('srijita')
})

test('should set startDate filter', () => {
    const startDate = moment()
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate })
    expect(state.startDate).toEqual(startDate)
})

test('should set endDate filter', () => {
    const endDate = moment()
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate })
    expect(state.endDate).toEqual(endDate)
})