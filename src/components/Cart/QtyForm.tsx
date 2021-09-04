import React from 'react';

import { useDispatch } from 'react-redux';
import * as Icon from 'react-feather';

type QtyFormProps = {
  id: string;
  quantity: number;
};

const QtyForm = ({ id, quantity }: QtyFormProps) => {
  const dispatch = useDispatch();

  const addQuantity = (pId: string) => {
    dispatch({
      type: 'ADD_QUANTITY',
      id: pId,
    });
  };

  const subQuantity = (pId: string) => {
    dispatch({
      type: 'SUB_QUANTITY',
      id: pId,
    });
  };
  return (
    <div className="input-counter">
      <span
        className="minus-btn"
        onClick={(e) => {
          e.preventDefault();
          subQuantity(id);
        }}
      >
        <Icon.Minus />
      </span>

      <input
        type="text"
        min="1"
        value={quantity}
        readOnly={true}
        onChange={(e) => e}
      />

      <span
        className="plus-btn"
        onClick={(e) => {
          e.preventDefault();
          addQuantity(id);
        }}
      >
        <Icon.Plus />
      </span>
    </div>
  );
};

export default QtyForm;
