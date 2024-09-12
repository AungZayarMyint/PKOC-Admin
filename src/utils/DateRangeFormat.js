import React,{ useState,useEffect,useRef} from 'react';
import { DateRangePicker  } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../assets/css/DateRangeFormat.css';

const DateRangeFormat = ({setStartDate, setEndDate}) => {
  const [range,setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [open,setOpen] = useState(false);
  const outSideRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  },[]);

  function hideOnEscape(e){
      if(e.key === 'Escape'){
         setOpen(false);
      };
  };
  function hideOnClickOutside(e){
     if(outSideRef.current && !outSideRef.current.contains(e.target)){
         setOpen(false);
     }
  };

  useEffect(() => {
    if (open) {
      setStartDate(format(range[0].startDate, "yyyy-MM-dd"));
      setEndDate(format(range[0].endDate, "yyyy-MM-dd"));
    }
  },[range]);

  return (
    <>
        <div>
            <div style={{position: 'relative'}}>
              <input style={{paddingRight: '35px'}} type="text" value={`${format(range[0].startDate, "yyyy-MM-dd")} to ${format(range[0].endDate, "yyyy-MM-dd")}`} className="form-control" readOnly onClick={() => setOpen(!open)}/>
              <div ref={outSideRef} className='date-range-child'>
                {
                    open && 
                    <DateRangePicker
                      onChange={item => setRange([item.selection])}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                      months={2}
                      direction='horizontal'
                    />
                }
              </div>
              <i className='bi-calendar position-calendar me-2' style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}></i>
              {/* <Calendar color='#2c323f' className='position-calendar'/> */}
            </div>
        </div>
    </>
  )
}

export default DateRangeFormat;