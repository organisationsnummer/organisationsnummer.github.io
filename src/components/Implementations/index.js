import Block from '../Block';

const Implementations = (props) => (
  <Block {...props}>
    <div className="overflow-auto lg:overflow-visible">
      <table className="lg:table-fixed w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 lowercase">Package</th>
            <th className="px-4 py-2 lowercase">Pkg Version</th>
            <th className="px-4 py-2 lowercase">Spec Version</th>
            <th className="px-4 py-2 lowercase">Status</th>
            <th className="px-4 py-2 lowercase">Maintainer</th>
          </tr>
        </thead>
      </table>
    </div>
  </Block>
);

export default Implementations;
