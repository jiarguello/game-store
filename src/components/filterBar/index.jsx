import React, { useContext} from 'react';
import * as S from './styled';
import Context from '../../context';
import { filterOptions, orderOptions } from './filterOption';

const FilterBar = () => {
  const { filter, setFilter, test, setTest } = useContext(Context);
  const { name: gameName, type, orderBy } = filter;

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
    console.log(gameName);
  };

  return (
    <S.Container>
      <S.SearchBar
        type="text"
        placeholder="Pesquisar por nome..."
        name="name"
        value={ gameName }
        onChange={ handleChange }
      />
      <S.SelectFilter
        name="type"
        value={ type }
        onChange={ handleChange }
      >
        {
          filterOptions.map(({ key, value }) => (
            <S.Option key={ key } value={ key }>{ value }</S.Option>
          ))
        }
      </S.SelectFilter>

      <S.SelectFilter
        name="orderBy"
        value={ orderBy }
        onChange={ handleChange }
      >
        { 
          orderOptions.map(({ key, value }) => (
            <S.Option key={ key } value={ key }>{ value }</S.Option>
          ))
        }
      </S.SelectFilter>
      <S.ButtonFilter>Filtrar</S.ButtonFilter>
    </S.Container>
  );
};

export default FilterBar;