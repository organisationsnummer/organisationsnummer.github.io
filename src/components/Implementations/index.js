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
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/js"
              >
                JavaScript
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/organisationsnummer/js"
              >
                <img
                  src="https://img.shields.io/github/v/release/organisationsnummer/js?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v1"
              >
                1.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/js/actions"
              >
                <img
                  src="https://img.shields.io/github/workflow/status/organisationsnummer/js/build?style=flat-square"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Block>
);

export default Implementations;
