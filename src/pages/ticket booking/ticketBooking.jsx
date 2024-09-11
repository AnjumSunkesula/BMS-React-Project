import { useLocation } from 'react-router-dom';
import './ticketBooking.css';
import { FiEdit2 } from "react-icons/fi";

function BookTickets () {

    const location = useLocation();
    const { selectedSeat } = location.state || { selectedSeat }




    return (
        <>
{/* HEADER  */}
        <div className='ticket-booking-container'>
            <div className='hBHgh'>
               <div className='VYTR'>
                  <div className='jgFGg'>movieName</div>
                  <div className='gVFRt'>selected city</div>
                </div>
                <div className='selected-seats-display'>
                    <div className='gFVrj'>{selectedSeat} tickets 
                        <div className='edit-icon'><FiEdit2 /></div>
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
                                            <div className='seat'>17</div>
                                            <div className='seat'>16</div>
                                            <div className='seat'>15</div>
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
                                    {/* ROW-2 line-2 */}
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>G</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='seat'>17</div>
                                            <div className='seat'>16</div>
                                            <div className='seat'>15</div>
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
                                    {/* row-2 line-3 */}
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>F</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='seat'>17</div>
                                            <div className='seat'>16</div>
                                            <div className='seat'>15</div>
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
                                    {/* row-2 line-4 */}
                                    <tr className='Rows'>
                                        <td className='hgsbw'>
                                            <div className='letter'>E</div>
                                        </td>

                                        <td className='row-seats'>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='no-seat'>&nbsp;</div>
                                            <div className='seat'>17</div>
                                            <div className='seat'>16</div>
                                            <div className='seat'>15</div>
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
                    <div className='curve'></div>
                    <p>All eyes this way please!</p>
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