import Block from '../Block';

export default props => (
  <Block {...props}>
    <table className='table-fixed w-full'>
      <thead>
        <tr>
          <th className='px-4 py-2'>Package</th>
          <th className='px-4 py-2'>Pkg Version</th>
          <th className='px-4 py-2'>Spec Version</th>
          <th className='px-4 py-2'>Status</th>
          <th className='px-4 py-2'>Maintainer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/csharp'
            >
              C#
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/csharp'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/csharp?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v1'
            >
              1.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://ci.appveyor.com/project/frozzare/csharp/branch/master'
            >
              <img
                src='https://ci.appveyor.com/api/projects/status/ajkcx0gg8rke8hx2?svg=true'
                alt='Build status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/johannestegner'
            >
              @Johannestegner
            </a>
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/dart'
            >
              Dart
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/dart'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/dart?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v2'
            >
              2.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://travis-ci.org/personnummer/dart'
            >
              <img
                src='https://travis-ci.org/personnummer/dart.svg?branch=master'
                alt='Build Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/frozzare'
            >
              @frozzare
            </a>
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/go'
            >
              Go
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/go'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/go?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v1'
            >
              1.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://travis-ci.org/personnummer/go'
            >
              <img
                src='https://travis-ci.org/personnummer/go.svg?branch=master'
                alt='Build Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/frozzare'
            >
              @frozzare
            </a>
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/java'
            >
              Java
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/java'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/java?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v1'
            >
              1.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://travis-ci.org/personnummer/java'
            >
              <img
                src='https://travis-ci.org/personnummer/java.svg?branch=master'
                alt='Build Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/johannestegner'
            >
              @Johannestegner
            </a>
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/js'
            >
              JavaScript
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/js'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/js?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v21'
            >
              2.1
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://travis-ci.org/personnummer/js'
            >
              <img
                src='https://travis-ci.org/personnummer/js.svg?branch=master'
                alt='Build Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/frozzare'
            >
              @frozzare
            </a>
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/kotlin'
            >
              Kotlin
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/kotlin'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/kotlin?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v1'
            >
              1.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://travis-ci.org/personnummer/kotlin'
            >
              <img
                src='https://travis-ci.org/personnummer/kotlin.svg?branch=master'
                alt='Build Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/johannestegner'
            >
              @Johannestegner
            </a>
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/php'
            >
              PHP
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/php'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/php?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v3'
            >
              3.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/php/actions'
            >
              <img
                src='https://img.shields.io/github/workflow/status/personnummer/php/PHP%20Composer'
                alt='GitHub Workflow Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/rasmusbe'
            >
              @rasmusbe
            </a>
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/python'
            >
              Python
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/python'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/python?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v2'
            >
              2.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://travis-ci.org/personnummer/python'
            >
              <img
                src='https://travis-ci.org/personnummer/python.svg?branch=master'
                alt='Build Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/frozzare'
            >
              @frozzare
            </a>
            /You?
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/ruby'
            >
              Ruby
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/ruby'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/ruby?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v1'
            >
              1.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://travis-ci.org/personnummer/ruby'
            >
              <img
                src='https://travis-ci.org/personnummer/ruby.svg?branch=master'
                alt='Build Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/frozzare'
            >
              @frozzare
            </a>
            /You?
          </td>
        </tr>
        <tr>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/swift'
            >
              Swift
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/swift'
            >
              <img
                src='https://img.shields.io/github/v/release/personnummer/swift?style=flat-square'
                alt='GitHub release (latest by date)'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/personnummer/meta/#package-specification-v1'
            >
              1.0
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://travis-ci.org/personnummer/swift'
            >
              <img
                src='https://travis-ci.org/personnummer/swift.svg?branch=master'
                alt='Build Status'
              />
            </a>
          </td>
          <td className='border px-4 py-2'>
            <a
              className='text-blue-500 hover:underline'
              rel='noopener noreferrer'
              href='https://github.com/GoranLilja'
            >
              @GoranLilja
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Block>
);
