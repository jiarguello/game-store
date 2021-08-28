import React, { useContext} from 'react';
import * as S from './styled';
import Context from '../../context';
import { filterOptions, orderOptions } from './filterOption';

const FilterBar = () => {
  const { filter, setFilter } = useContext(Context);
  const { name, type, orderBy } = filter;

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <S.Container>
      <S.SearchBar
        type="text"
        placeholder="Pesquisar por nome..."
        name="name"
        value={ name }
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
    </S.Container>
  );
};

export default FilterBar;