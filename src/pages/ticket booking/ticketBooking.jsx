import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useLocation, useHistory, } from 'react-router-dom';
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


    const handleFoodAdditionPage = () => {
        history.push('/addfoods', {
            selectedSeats: selectedSeats,   //array of selected seat numbers like [A1,A2]
            totalPrice: totalPrice,         //total price of the selected seats
            seatCount: selectedSeats.length //number of selected seats
        })
    };
     

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

    // Automatic adjacent seat selection    

    // const handleSeatClick = (seatNumber, seatType) => {
    //     setSelectedSeats([]);                                                    // Reset all previously selected seats when selecting a new seat

    //     const selectedRow = seatNumber[0];                                          // Get the row letter (e.g., 'A', 'B')
    //     const seatIndex = parseInt(seatNumber.slice(1));                            // Get the seat number (e.g., '1', '2', etc.)

    //     // Generate new selection based on the clicked seat
    //     const newSelection = [];
    //     for (let i = 0; i < totalSeatsToSelect; i++) {
    //         const nextSeatNumber = `${selectedRow}${seatIndex + i}`;
    //         newSelection.push(nextSeatNumber);
    //     }
        
    //     // Update selected seats with the new selection
    //     setSelectedSeats(newSelection);
    //     setSelectedDivision(seatType);                                               // Set the currently selected division
    // };

    // manual seat selection

    const handleSeatClick = (seatNumber, seatType) => {
        if (selectedSeats.includes(seatNumber)) {                                       // Check if the seat is already selected
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));      // If the seat is already selected, deselect it
        } else {
            if (selectedSeats.length < totalSeatsToSelect) {                             // If the seat is not already selected, and we haven't reached the total seats limit
                setSelectedSeats([...selectedSeats, seatNumber]);                        // Select the seat
                setSelectedDivision(seatType);                                           // Set the seat type when selecting a new seat
            }
        }
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
                                            <div className='letter'>A</div>
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
                                            <div className='letter'>B</div>
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
                                            <div className='letter'>C</div>
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
                                            <div className='letter'>D</div>
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
                                            <div className='letter'>F</div>
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
                                            <div className='letter'>G</div>
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
                                            <div className='letter'>H</div>
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
                                            <div className='letter'>I</div>
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
                {selectedSeats.length === 0 && (          //this condition means this footer will be displayed only when no seats are selected
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
                )}
                {/* payment box */}
                {selectedSeats.length === totalSeatsToSelect && (
                    <Popup 
                       modal 
                       nested
                       contentStyle={{ width : '27%' }}
                       trigger={
                            <div className='payment-popup'>
                                <div className='payment-price'>pay rs: {totalPrice}</div>
                            </div>
                        }>
                        {close => (
                            <>
                                <div className='terms-conditions-popup'>

                                    <div className='terms-conditions'>
                                        <div className='dbxshe'>terms & conditions</div>
                                        <div className='edit-icon' onClick={close}><IoMdClose /></div>
                                    </div>

                                    <div className='conditions'>
                                        1. Food & Beverages are not allowed inside the auditorium as per the state government guidelines.
                                        <br/>
                                        2. Entry is allowed only for valid ticket holders.
                                        <br/>
                                        3. Guets aged under 18 will not be allowed in 'A' rated movies.
                                        <br/>
                                        4. Children above the age of 3 years and above require tickets.
                                        <br/>
                                        5. In case a ticket is lost or misplaced, a duplicate ticket cannot be issued.
                                        <br/>
                                        6. Tickets once purchased cannot be cancelled, exchanged or refunded.
                                        <br/>
                                        7. Patrons once enter in theatre premises will not be allowed to go outside cinemas till movie gets over, if patron wish to leave the theatre premises there will be no re-entry on same ticket.
                                        <br/>
                                        8. Items like laptops, cameras, knives, lighter, match box, cigarattes, firearms & all types of inflammable objects are strictly prohibited.
                                        <br/>
                                        9. On single ticket one patron will be allowed to the cinema (kindly check while booking the seats for couple recliner).
                                        <br/>
                                        10. Decision taken by MAXUS shall be final and binding rights of admission reserved.
                                        <br/>
                                    </div>

                                    <div className='payment-options'>
                                        <div onClick={close} className='cancel-button'>cancel</div>
                                        <div className='accept-button' onClick={handleFoodAdditionPage}>accept</div>
                                    </div>

                                </div>


                            </>
                        )}

                    </Popup>
                )}
            </div>
        </div>
        </>
    );
}
export default BookTickets;