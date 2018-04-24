import { connect } from 'react-redux'
import Day from '../components/day'

const mapStateToProps = state => ({day: state.day})
const DayContainer = connect(mapStateToProps)(Day)

export default DayContainer
