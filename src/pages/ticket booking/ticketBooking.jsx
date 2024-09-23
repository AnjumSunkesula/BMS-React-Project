import { useLocation, useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import './ticketBooking.css';
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";

function BookTickets ({ selectedCity }) {

    const location = useLocation();

    const history = useHistory();

    const handleSeatSelectionClose = () => {
        history.push('/seeall');
    }

    const SeatSelectionClose = () => {
        history.push('/home');
    }
     

    const { movieName } = location.state || { movieName: 'no movies selected' };
    const { selectedSeat } = location.state || { selectedSeat };                 //default to empty array if no selectedd seat
    const { certification } = location.state || { certification };
    const { genre = '' } = location.state || {};
    
    const seatPrices = {
        recliner : 940,
        prime : 280,
        classic : 170,
        lounger : 320,
    };
    
    const [selectedSeats, setSelectedSeats] = useState([]);                      // Track selected seats
    const [selectedDivision, setSelectedDivision] = useState(null);
    const totalSeatsToSelect = selectedSeat;                                    // Use selectedSeat directly

    


   const handleSeatClick = (seatNumber, seatType) => {
    // Reset all previously selected seats when selecting a new seat
    setSelectedSeats([]);

    const selectedRow = seatNumber[0]; // Get the row letter (e.g., 'A', 'B')
    const seatIndex = parseInt(seatNumber.slice(1)); // Get the seat number (e.g., '1', '2', etc.)

    // Generate new selection based on the clicked seat
    const newSelection = [];
    for (let i = 0; i < totalSeatsToSelect; i++) {
        const nextSeatNumber = `${selectedRow}${seatIndex + i}`;
        newSelection.push(nextSeatNumber);
    }

    // Update selected seats with the new selection
    setSelectedSeats(newSelection);
    setSelectedDivision(seatType); // Set the currently selected division
};









    const isSelected = (seatNumber) => selectedSeats.includes(seatNumber);

    // Calculate total price
    const totalPrice = selectedSeats.length * (seatPrices[selectedDivision] || 0);

    

    return (
        <>
{/* HEADER  */}
        <div className='ticket-booking'>
            <div className='hBHgh'>
                <div className='VHtfg'>
                    <div className='l-arrow-icon' onClick={handleSeatSelectionClose}><MdKeyboardArrowLeft /></div>
                    <div className='VYTR'>
                        <div className='BHGa'>
                            <div className='jgFGg'>{movieName}</div>
                            <div className='Htags'>{certification}</div>
                        </div>
                            
                        <div className='BHGa'>
                            <div className='genre-box'>
                                {genre.split(/[/,]/).map((word, index) => (                  //to remove the commas and forardslashes and add a border to each word seperately
                                    <div className='hgVF' key={index}>
                                        {word.trim()}
                                    </div>
                                ))}
                            </div>

                            <div className='gVFRt'>{selectedCity}</div>
                        </div>
                    </div>
                </div>

                <div className='selected-seats-display'>
                    <div className='gFVrj'>
                        {totalSeatsToSelect} tickets 
                    </div>
                    <div className='edit-icon' onClick={SeatSelectionClose}><IoMdClose /></div>
                </div>
            </div>

{/* SEAT BOOKING */}
            <div className='seats'>
               <div id='layout'>
                    <table cellSpacing={0} cellPadding={0}>
                        <tbody>
    {/* FIRST ROW DIV */}
                            <div className='HGVYT'>
                                <tr>
                                    <td>
                                        <div className='recliner'>rs. {seatPrices.recliner} recliner</div>
                                    </td>
                                </tr>

                                {/* ROW-1 */}
                                <div className='hsanBH'>
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>J</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['14', '13', '12', '11'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`J${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`J${seat}`, 'recliner')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['10', '9'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`J${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`J${seat}`, 'recliner')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['8', '7', '6', '5'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`J${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`J${seat}`, 'recliner')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                            <div className='no-seat'>&nbsp;</div>
                                            {['4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`J${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`J${seat}`, 'recliner')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                            <div className='no-seat'>&nbsp;</div>
                                        </td>
                                    </tr>
                                </div>
                            </div>
    {/* SECOND ROW DIV */}
                            <div className='HGVYT'>
                                <tr>
                                    <td>
                                        <div className='recliner'>rs. {seatPrices.prime} prime</div>
                                    </td> 
                                </tr>
                                {/* ROW-2-line-1 */}
                                <div className='hsanBH'>
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>H</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`H${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`H${seat}`, 'prime')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                    {/* ROW-2 line-2 */}
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>G</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`G${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`G${seat}`,'prime')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                    {/* row-2 line-3 */}
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>F</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`F${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`F${seat}`,'prime')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                    {/* row-2 line-4 */}
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>E</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`E${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`E${seat}`,'prime')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                </div>
                            </div>
    {/* THIRD ROW DIV */}  
                            <div className='HGVYT'>
                                <tr>
                                    <td>
                                    <div className='recliner'>rs. {seatPrices.classic} classic</div>
                                    </td> 
                                </tr>
                                {/*third row line-1  */}
                                <div className='hsanBH'>
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>D</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`D${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`D${seat}`, 'classic')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>   
                                    {/*third row line-2  */}
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>C</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`C${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`C${seat}`, 'classic')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                        </td>
                                    </tr> 
                                    {/*third row line-3  */}
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>B</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`B${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`B${seat}`, 'classic')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>  
                                </div>
                            </div>
    {/* FOURTH ROW DIV  */}
                            <div className='HGVYT'>
                                <tr>
                                    <td>
                                        <div className='recliner'>rs. {seatPrices.lounger} lounger</div>
                                    </td> 
                                </tr> 
                                {/* row-4 line-1 */}
                                <div className='hsanBH'>
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>A</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            {['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((seat) => (
                                                <div
                                                    key={seat}
                                                    className={`seat ${isSelected(`A${seat}`) ? 'selected' : ''}`}
                                                    onClick={() => handleSeatClick(`A${seat}`, 'lounger')}
                                                >
                                                    {seat}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>  
                                </div>
                            </div>
                        </tbody>
                    </table>
               </div>
               {/* screen */}
                <div class="theater-screen">
                    <h5 className='screen'>All eyes this way please!</h5>
                </div>
                {/* FOOTER */}
                <div className='check-boxes'>
                    <div className='gVYSF'>
                        <div className='available-checkbox Gefs'></div>
                        <div className='status-text'>available</div>
                    </div>
                    <div className='gVYSF'>
                        <div className='selected-checkbox Gefs'></div>
                        <div className='status-text'>selected</div>
                    </div>
                    <div className='gVYSF'>
                        <div className='sold-checkbox Gefs'></div>
                        <div className='status-text'>sold</div>
                    </div>
                </div>
                {/* payment box */}
                <div>
                    {selectedSeats.length > 0 && (
                        <div>
                            <div>preie: {totalPrice}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}
export default BookTickets;