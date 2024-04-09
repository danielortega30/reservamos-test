import { FC, useState } from 'react';
import './index.css'
import { toastError } from '../../libs/toast';
import { LoadingSpinner } from '../LoadSpinner';
import { useReservamos } from '../../hooks/useReservamos';
import { ReservamosItem } from '../../interfaces/reservamos.interfaces';

interface Props{
    onCitieSelected:(_:ReservamosItem)=>void;
}

export const Form:FC<Props> = ({onCitieSelected}) => {

    const [place, setPlace] = useState('');
    const{cities, loading,getCities} = useReservamos();


    const handleSubmit = async(ev) => {
        ev.preventDefault()

        if(place.trim() === ''){
            return toastError('','El lugar es requerido para consultar el clima')
        }

        getCities(place);
    }

  return (
    <form  onSubmit={ handleSubmit }
    className="form">
        <p className='form__header'>
        Ingresa una ciudad o sus iniciales para poder observar su clima de las posibles ciudades
        </p>
              <div className="form__field">
                    <label htmlFor="place" className="form__label">Lugar</label>
                    <input 
                        type="text" 
                        name="place" 
                        id="place"
                        value={place}
                        onChange={({ target })=> setPlace(target.value) }
                        disabled={ loading }
                        className="form__input"
                        autoComplete='false'
                    />
                </div>
                <button
                    type="submit"
                    className="button-submit"
                    disabled={ loading }
                >
                    {
                        loading
                        ?( <LoadingSpinner /> )
                        : 'Buscar'
                    }
                </button>
                {
                    cities.length ?     
                    <div className='form__suggestions'>
                        <h4 className='form_suggestions-title'>Coincidencias</h4>
                        <div className='form__suggestions-content'>
                        {
                            cities.map(citie=> <div key={citie.id} className='form__suggestions-item' onClick={()=>onCitieSelected(citie)}> 
                                {citie.city_name}
                            </div>)
                        }
                        </div>
                      
                    </div>:null
                }
                
    </form>
  )
}
