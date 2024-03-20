import { useEffect } from 'react';

function NumberInput({
  value,
  setValue,
  predicate = () => true,
  min = 0,
  max = Infinity,
  step = 1,
  placeholder = 'placeholder',
  disabled = false,
}: {
  value: number;
  setValue: (value: number) => void;
  predicate?: (value: number) => boolean;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
}) {
  useEffect(() => {
    if (isNaN(value)) setValue(0);
  }, [value]);

  const buttonClass =
    'size-10 text-5xl inline-flex justify-center items-center rounded-md shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none';
  return (
    <div className="bg-gray-100 rounded-lg" data-hs-input-number>
      <div className="flex w-full items-center justify-between gap-x-5">
        <div className="grow">
          <input
            onChange={(e) => {
              const v = parseInt(e.target.value);
              if (predicate(value) && value <= max && value >= min) setValue(v);
            }}
            disabled={disabled}
            placeholder={placeholder}
            className="bg-transparent border-box w-full rounded border-2 border-control-secondary bg-black/10 p-2"
            type="text"
            value={value ?? 0}
            data-hs-input-number-input
          />
        </div>
        <div className="flex items-center justify-end gap-x-1.5">
          <button
            onClick={() => {
              if (predicate(value) && value > min) setValue(value - step);
            }}
            type="button"
            className={
              buttonClass +
              ' border-2 border-black/0 bg-error/10 text-error hover:border-error'
            }
            data-hs-input-number-decrement
          >
            -{' '}
          </button>
          <button
            onClick={() => {
              if (predicate(value) && value < max) setValue(value + step);
            }}
            type="button"
            className={
              buttonClass +
              ' border-2 border-black/0 bg-success/10 text-success hover:border-highlight'
            }
            data-hs-input-number-increment
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumberInput;
