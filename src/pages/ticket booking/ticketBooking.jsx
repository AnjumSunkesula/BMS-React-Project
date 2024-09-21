import { useLocation } from 'react-router-dom';
import React, {useState} from 'react';
import './ticketBooking.css';
import { FiEdit2 } from "react-icons/fi";

function BookTickets ({ selectedCity }) {

    const location = useLocation();

    const { movieName } = location.state || { movieName: 'no movies selected' };
    const { selectedSeat } = location.state || { selectedSeat }; //default to empty array if no selectedd seat
     const initialSelectedSeats = Array.isArray(location.state?.selectedSeat) ? location.state.selectedSeat : []; // Ensure it's an array
    const { certification } = location.state || { certification };
    const { genre = '' } = location.state || {};
    
     const totalSeatsToSelect = selectedSeat; // Use selectedSeat directly
    const [selectedSeats, setSelectedSeats] = useState([]); // Track selected seats

    
    
    const handleSeatClick = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            // Remove the seat if it's already selected
            setSelectedSeats(prevSelectedSeats => prevSelectedSeats.filter(seat => seat !== seatNumber));
        } else if (selectedSeats.length < totalSeatsToSelect) {
            // Add the seat to selectedSeats if it's not selected and the limit is not reached
            setSelectedSeats(prevSelectedSeats => [...prevSelectedSeats, seatNumber]);
        }
    };

    const isSelected = (seatNumber) => selectedSeats.includes(seatNumber); 
    return (
        <>
{/* HEADER  */}
        <div className='ticket-booking'>
            <div className='hBHgh'>
                <div className='VYTR'>
                    <div className='BHGa'>
                       <div className='jgFGg'>{movieName}</div>
                       <div className='Htags'>{certification}</div>
                    </div>
                        
                    <div className='BHGa'>
                        <div className='genre-box'>
                            {genre.split(',').map((word, index) => (
                            <div className='hgVF' key={index}>{word.trim()}</div>
                            ))}
                        </div>

                        <div className='gVFRt'>{selectedCity}</div>

                    </div>
                </div>
                <div className='selected-seats-display'>
                    <div className='gFVrj'>{totalSeatsToSelect} tickets 
                        <div className='edit-icon' >
                            <FiEdit2 />
                        </div>
                    </div>
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
                                        <div className='recliner'>rs. 940 recliner</div>
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
                                            <div className='seat'>14</div>
                                            <div className='seat'>13</div>
                                            <div className='seat'>12</div>
                                            <div className='seat'>11</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='seat'>10</div>
                                            <div className='seat'>9</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='seat'>8</div>
                                            <div className='seat'>7</div>
                                            <div className='seat'>6</div>
                                            <div className='seat'>5</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='seat'>4</div>
                                            <div className='seat'>3</div>
                                            <div className='seat'>2</div>
                                            <div className='seat'>1</div>
                                            <div className='no-seat'>&nbsp;</div>
                                        </td>
                                    </tr>
                                </div>
                            </div>
    {/* SECOND ROW DIV */}
                            <div className='HGVYT'>
                                <tr>
                                    <td>
                                        <div className='recliner'>rs. 280 prime</div>
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
                                                    onClick={() => handleSeatClick(`H${seat}`)}
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
                                                    onClick={() => handleSeatClick(`G${seat}`)}
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
                                                    onClick={() => handleSeatClick(`F${seat}`)}
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
                                                    onClick={() => handleSeatClick(`E${seat}`)}
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
                                    <div className='recliner'>rs. 170 classic</div>
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
                                            <div className='seat'>14</div>
                                            <div className='seat'>13</div>
                                            <div className='seat'>12</div>
                                            <div className='seat'>11</div>
                                            <div className='seat'>10</div>
                                            <div className='seat'>9</div>
                                            <div className='seat'>8</div>
                                            <div className='seat'>7</div>
                                            <div className='seat'>6</div>
                                            <div className='seat'>5</div>
                                            <div className='seat'>4</div>
                                            <div className='seat'>3</div>
                                            <div className='seat'>2</div>
                                            <div className='seat'>1</div>
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
                                            <div className='seat'>14</div>
                                            <div className='seat'>13</div>
                                            <div className='seat'>12</div>
                                            <div className='seat'>11</div>
                                            <div className='seat'>10</div>
                                            <div className='seat'>9</div>
                                            <div className='seat'>8</div>
                                            <div className='seat'>7</div>
                                            <div className='seat'>6</div>
                                            <div className='seat'>5</div>
                                            <div className='seat'>4</div>
                                            <div className='seat'>3</div>
                                            <div className='seat'>2</div>
                                            <div className='seat'>1</div>
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
                                            <div className='seat'>14</div>
                                            <div className='seat'>13</div>
                                            <div className='seat'>12</div>
                                            <div className='seat'>11</div>
                                            <div className='seat'>10</div>
                                            <div className='seat'>9</div>
                                            <div className='seat'>8</div>
                                            <div className='seat'>7</div>
                                            <div className='seat'>6</div>
                                            <div className='seat'>5</div>
                                            <div className='seat'>4</div>
                                            <div className='seat'>3</div>
                                            <div className='seat'>2</div>
                                            <div className='seat'>1</div>
                                        </td>
                                    </tr>  
                                </div>
                            </div>
    {/* FOURTH ROW DIV  */}
                            <div className='HGVYT'>
                                <tr>
                                    <td>
                                        <div className='recliner'>rs. 280 lounger</div>
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
                                            <div className='seat'>10</div>
                                            <div className='seat'>9</div>
                                            <div className='seat'>8</div>
                                            <div className='seat'>7</div>
                                            <div className='seat'>6</div>
                                            <div className='seat'>5</div>
                                            <div className='seat'>4</div>
                                            <div className='seat'>3</div>
                                            <div className='seat'>2</div>
                                            <div className='seat'>1</div>
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
            </div>
        </div>
        </>
    );
}
export default BookTickets;