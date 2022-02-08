import { useState } from 'react';
import organisationsnummer from 'organisationsnummer';
import Block, { BlockProps } from '../Block';
import pkg from '../../../package.json';

type Output = {
  type: string;
  long: string;
  short: string;
  vat: string;
  valid: boolean;
};

const getOrganisationsnummerObj = (pin: string): Output => {
  const output = {
    type: 'n/a',
    long: 'n/a',
    short: 'n/a',
    vat: 'n/a',
    valid: false
  };

  if (typeof pin !== 'string') {
    return output;
  }

  try {
    const p = organisationsnummer.parse(pin);

    output.type = p.type();
    output.long = p.format();
    output.short = p.format(false);
    output.vat = p.vatNumber();
    output.valid = true;
  } catch (err) {}

  return output;
};

const Try = (props: BlockProps) => {
  const [org, setOrg] = useState('');
  const orgObj = getOrganisationsnummerObj(org);

  return (
    <Block {...props}>
      <p className="pt-3">input</p>
      <input
        type="text"
        onChange={(e) => setOrg(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <p className="pt-3">result</p>
      <table className="table-fixed w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2">valid</td>
            <td
              className={`border px-4 py-2 ${
                orgObj.valid ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {orgObj.valid ? 'yes' : 'no'}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">short format</td>
            <td className="border px-4 py-2">{orgObj.short}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">long format</td>
            <td className="border px-4 py-2">{orgObj.long}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">type</td>
            <td className="border px-4 py-2">{orgObj.type}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">vat number</td>
            <td className="border px-4 py-2">{orgObj.vat}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-3 italic">
        using javascript version{' '}
        {pkg.devDependencies.organisationsnummer.replace('^', '')}
      </p>
    </Block>
  );
};

export default Try;
